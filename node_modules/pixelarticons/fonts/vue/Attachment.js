import { defineComponent, h } from 'vue';

export const Attachment = defineComponent({
  name: 'Attachment',
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
        h('path', {"d": "M7 7v10H5V7zm12 0v12h-2V7zm-8 2v10H9V9zm4 0v8h-2V9zm0-6v2H9V3zm-2 4v2h-2V7zm4 12v2h-6v-2zm0-14v2h-2V5zM9 5v2H7V5z", "fillRule": "evenodd"})
      ]
    );
  }
});
