import { defineComponent, h } from 'vue';

export const GpuSharp = defineComponent({
  name: 'GpuSharp',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        width: '24px', height: '24px',
        class: `pixelart-icons-font ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "M1 2h2v20H1zm2 2h20v2H3zm18 2h2v10h-2zM3 16h20v2H3zm4 2h2v2H7zm0 2h10v2H7zm8-2h2v2h-2zM7 8h2v2H7zm8 0h2v2h-2zM5 10h2v2H5zm8 0h2v2h-2zm-6 2h2v2H7zm8 0h2v2h-2zm-6-2h2v2H9zm8 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
