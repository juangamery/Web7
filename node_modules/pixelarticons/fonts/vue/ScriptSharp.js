import { defineComponent, h } from 'vue';

export const ScriptSharp = defineComponent({
  name: 'ScriptSharp',
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
        h('path', {"d": "M2 17h2v4H2zM18 5h2v16h-2zM4 3h2v12H4zm10 12h2v4h-2zM4 19h14v2H4zm-2-4h12v2H2zM6 3h14v2H6zm14 2h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
