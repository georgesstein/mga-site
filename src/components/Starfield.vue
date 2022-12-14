<script>
import {
  lerp,
  BufferGeometry,
  Camera,
  EffectComposer,
  Points,
  Renderer,
  RenderPass,
  Scene,
  ShaderMaterial,
  Texture,
  UnrealBloomPass,
  ZoomBlurPass,
} from "troisjs";

import { Clock, Color, MathUtils, Vector3 } from "three";

import { niceColors } from "../constants.js";
import TheButton from "./TheButton.vue";

const { randFloat: rnd, randInt, randFloatSpread: rndFS } = MathUtils;

const vertexShader = `
  uniform float uTime;
  attribute vec3 color;
  attribute float size;
  attribute float velocity;
  varying vec4 vColor;
  void main(){
    vColor = vec4(color, 1.0);
    vec3 p = vec3(position);
    p.z = -150. + mod(position.z + uTime, 300.);
    vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
    gl_PointSize = size * (-50.0 / mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec4 vColor;
  void main() {
    gl_FragColor = vColor * texture2D(uTexture, gl_PointCoord);
  }
`;

export default {
  inheritAttrs: false,

  components: {
    BufferGeometry,
    Camera,
    EffectComposer,
    Points,
    Renderer,
    RenderPass,
    Scene,
    ShaderMaterial,
    Texture,
    UnrealBloomPass,
    ZoomBlurPass,
    TheButton,
  },
  setup() {
    const POINTS_COUNT = 30000;
    const palette = niceColors[8];

    const positions = new Float32Array(POINTS_COUNT * 3);
    const colors = new Float32Array(POINTS_COUNT * 3);
    const sizes = new Float32Array(POINTS_COUNT);
    const v3 = new Vector3(),
      color = new Color();
    for (let i = 0; i < POINTS_COUNT; i++) {
      v3.set(rndFS(200), rndFS(200), rndFS(300));
      v3.toArray(positions, i * 3);
      color.set(palette[Math.floor(rnd(0, palette.length))]);
      color.toArray(colors, i * 3);
      sizes[i] = rnd(5, 20);
    }

    const attributes = [
      { name: "position", array: positions, itemSize: 3 },
      { name: "color", array: colors, itemSize: 3 },
      { name: "size", array: sizes, itemSize: 1 },
    ];

    const uniforms = { uTime: { value: 0 } };

    const clock = new Clock();

    const timeCoef = 1;
    const targetTimeCoef = 1;

    return {
      POINTS_COUNT,
      attributes,
      uniforms,
      vertexShader,
      fragmentShader,
      clock,
      timeCoef,
      targetTimeCoef,
    };
  },

  data() {
    return {
      zoomStrength: 0,
      buttonTitle: "Boost Your Sales",
    };
  },

  mounted() {
    const renderer = this.$refs.renderer;
    const positionN = renderer.three.pointer.positionN;
    const points = this.$refs.points.points;

    renderer.onBeforeRender(() => {
      this.timeCoef = lerp(this.timeCoef, this.targetTimeCoef, 0.02);
      this.uniforms.uTime.value += this.clock.getDelta() * this.timeCoef * 4;
      this.zoomStrength = this.timeCoef * 0.004;

      const da = 0.05;
      const tiltX = lerp(points.rotation.x, positionN.y * da, 0.02);
      const tiltY = lerp(points.rotation.y, -positionN.x * da, 0.02);
      points.rotation.set(tiltX, tiltY, 0);
    });
  },
};
</script>

<template>
  <div class="container">
    <Renderer ref="renderer" pointer resize="window">
      <Camera :position="{ z: 0 }" :fov="50" />
      <Scene>
        <Points ref="points" :position="{ z: -150 }">
          <BufferGeometry :attributes="attributes" />
          <ShaderMaterial
            :props="{
              blending: 2,
              depthTest: false,
              uniforms: uniforms,
              vertexShader: vertexShader,
              fragmentShader: fragmentShader,
            }"
          >
            <!-- <Texture
              src="https://assets.codepen.io/33787/sprite.png"
              uniform="uTexture"
            /> -->
          </ShaderMaterial>
        </Points>
      </Scene>
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="2" :radius="0" :threshold="0" />
        <ZoomBlurPass :strength="zoomStrength" />
      </EffectComposer>
    </Renderer>

    <div
      style="
        background-color: white;

        margin: 200px;
        z-index: 2;
      "
    >
      <TheButton
        href="#"
        @mouseenter="targetTimeCoef = 60"
        @mouseleave="targetTimeCoef = 1"
        :title="buttonTitle"
        :width="300"
      >
        <img src="@/assets/icons/button-rocket.svg" />
      </TheButton>
    </div>
  </div>

  <!-- <div
    style="
      width: 100vw;
      height: 200px;
      background-color: red;
      z-index: 2;
      position: relative;
    "
  ></div> -->
</template>

<style lang="scss" scoped>
.container {
  background-attachment: fixed;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  canvas {
    display: block;
    position: fixed;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>