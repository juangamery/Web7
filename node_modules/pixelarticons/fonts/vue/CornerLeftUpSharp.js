import { defineComponent, h } from 'vue';

export const CornerLeftUpSharp = defineComponent({
  name: 'CornerLeftUpSharp',
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
        h('path', {"d": "M8 18V4h2v14zm0 2v-2h12v2zm6-12v2h-2V8zm-2-2v2h-2V6zM8 6v2H6V6z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 8v2H4V8z", "fillRule": "evenodd"})
      ]
    );
  }
});
