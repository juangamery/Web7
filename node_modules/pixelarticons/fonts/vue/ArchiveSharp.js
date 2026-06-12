import { defineComponent, h } from 'vue';

export const ArchiveSharp = defineComponent({
  name: 'ArchiveSharp',
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
        h('path', {"d": "M1 2h22v2H1zm0 5h22v2H1zm0-3h2v3H1zm20 0h2v3h-2zm-2 5h2v11h-2zM3 9h2v11H3zm0 11h18v2H3zm6-9h6v2H9z", "fillRule": "evenodd"})
      ]
    );
  }
});
