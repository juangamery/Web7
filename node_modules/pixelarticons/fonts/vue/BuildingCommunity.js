import { defineComponent, h } from 'vue';

export const BuildingCommunity = defineComponent({
  name: 'BuildingCommunity',
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
        h('path', {"d": "M4 20h16v2H4zM20 4h2v16h-2zM10 2h10v2H10zM8 8h2v2H8zm0-4h2v2H8zm2 6h2v2h-2zm2 2h2v2h-2zm2 2h2v6h-2zm-8-4h2v2H6zm-2 2h2v2H4zm-2 2h2v6H2zm14-8h2v2h-2zm-4 0h2v2h-2zm4 4h2v2h-2zm-8 6h2v4H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
