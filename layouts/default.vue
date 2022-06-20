<template>
  <div class="min-h-[130vh] flex flex-col">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter class="mt-auto" />
  </div>
</template>