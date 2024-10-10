<template>
    <div
    class="absolute top-[0px] left-[0px] bg-[#fff] border-[#bdbdbd] border-b-[1px] border-solid box-border w-[1440px] h-[111px] overflow-hidden text-center text-[30px] text-[#404040] font-[Poppins]"
  >
    <div
      class="absolute top-[28px] left-[calc(50%_-_612px)] w-[1224px] flex flex-row items-center justify-start gap-[263px]"
    >
      <div
        class="h-[55px] flex flex-row items-center justify-start gap-[4px] text-[#2563eb]"
      >
        <img class="w-[50px] relative h-[50px]" alt="" src="/vector-4089.svg" />
        <div class="relative tracking-[-0.04em] leading-[61.6px] font-semibold">
          Speak up
        </div>
      </div>
      <div class="flex flex-row items-center justify-start text-[16px]">
        <div
          class="w-[406px] h-[25px] flex flex-row items-start justify-center gap-[40px]"
        >
          <div class="flex flex-row items-center justify-center text-[#2563eb]">
            <b class="relative">Home</b>
          </div>
          <div class="flex flex-row items-center justify-center">
            <div class="relative">Courses</div>
          </div>
          <div class="flex flex-row items-center justify-center">
            <div class="relative">Contact us</div>
          </div>
          <div class="flex flex-row items-center justify-center">
            <div class="relative">About us</div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-end text-[20px]">
        <div class="flex flex-row items-end justify-start gap-[24px]">
          <img
            class="w-[24px] relative h-[24px] overflow-hidden shrink-0"
            alt=""
            src="/perm-identity.svg"
          />
          <div
            class="w-[57px] flex flex-row items-center justify-center gap-[8px]"
          >
            <div class="flex-1 relative">EN</div>
            <img
              class="flex-1 relative max-w-full overflow-hidden h-[24px]"
              alt=""
              src="/keyboard-arrow-down.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Header', 
    components: {}
})

</script>