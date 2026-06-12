import { defineComponent, h } from 'vue';

export const HotelBed = defineComponent({
  name: 'HotelBed',
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
        h('path', {"d": "M2 16h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0V4h2v12Zm7-1H5v-2h4v2Zm-4-2H3V9h2v4Zm6 0H9V9h2v4ZM9 9H5V7h4v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
