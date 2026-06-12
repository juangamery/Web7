import { defineComponent, h } from 'vue';

export const Coins = defineComponent({
  name: 'Coins',
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
        h('path', {"d": "M6 2h6v2H6zM4 4h2v2H4zm8 0h2v2h-2zm-8 8h2v2H4zm8 0h2v2h-2zm-6 2h6v2H6zM2 6h2v6H2zm12 0h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 8h4v2h-4zm-4 10h2v2h-2zm8-8h2v2h-2zm-6 10h2v2h-2zm6-2h2v2h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 20h6v2h-6zm-4-6h2v4H8zm12-2h2v6h-2zM7 6h4v2H7z", "fillRule": "evenodd"}),
        h('path', {"d": "M9 6h2v6H9zm6 8h2v4h-2zm-1-2h3v2h-3z", "fillRule": "evenodd"})
      ]
    );
  }
});
