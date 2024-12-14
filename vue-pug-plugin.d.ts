declare module "vue-pug-plugin" {
  interface VuePugPlugin {
    pug: string;
  }

  const vuePugPlugin: VuePugPlugin;
  export default vuePugPlugin;
}
