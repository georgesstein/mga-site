<template>
  <a class="link-item">
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3.5H11.75V2C11.75 1.17275 11.0773 0.5 10.25 0.5H5.75C4.92275 0.5 4.25 1.17275 4.25 2V3.5H2C1.17275 3.5 0.5 4.17275 0.5 5V7.25H15.5V5C15.5 4.17275 14.8273 3.5 14 3.5ZM5.75 2H10.25V3.5H5.75V2ZM9.5 9.5H6.5V8H0.5V13.25C0.5 14.0773 1.17275 14.75 2 14.75H14C14.8273 14.75 15.5 14.0773 15.5 13.25V8H9.5V9.5Z"
        fill="#AEAEB2"
      />
    </svg>
    Jobs
  </a>
</template>

<style lang="scss" scoped>
.link-item {
  @include small-light;
  width: 100%;
  color: $second;
  display: flex;
  align-items: center;
  column-gap: 13px;

  &:hover path,
  &:hover {
    color: $base;
    fill: $base;
  }
}
</style>