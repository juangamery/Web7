import { defineComponent, h } from 'vue';

export const Algorithm = defineComponent({
  name: 'Algorithm',
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
        h('path', {"d": "M11 16h4v2h-4zm-8 0h4v2H3zm16 0h4v2h-4zM9 16h2v6H9zm-8 0h2v6H1zm16 0h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M9 20h6v2H9zm-8 0h6v2H1zm16 0h6v2h-6z", "fillRule": "evenodd"}),
        h('path', {"d": "M13 16h2v6h-2zm-8 0h2v6H5zm16 0h2v6h-2zM8 8h8v2H8z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 2h2v8H8z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 2h8v2H8z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 2h2v8h-2zM3 14h2v3H3zm2-2h14v2H5zm14 2h2v3h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 9h2v9h-2zm5-4h2v2h-2zm-5-5h2v2h-2zM6 5h2v2H6z", "fillRule": "evenodd"})
      ]
    );
  }
});
