import { defineComponent, h } from 'vue';

export const LanguagesSharp = defineComponent({
  name: 'LanguagesSharp',
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
        h('path', {"d": "M7 2h4v2H7zM2 5h14v2H2zm9 2h2v2h-2zM9 9h2v2H9zm-2 2h2v2H7zM5 9h2v2H5zm4 4h2v2H9zm-4 0h2v2H5zm8 2h2v7h-2zm0-2h9v2h-9zm7 2h2v7h-2zm-5 2h5v2h-5z", "fillRule": "evenodd"})
      ]
    );
  }
});
