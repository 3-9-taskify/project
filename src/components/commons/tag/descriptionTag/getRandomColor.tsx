interface ColorInfo {
  backgroundColor: string;
  color: string;
}

function getRandomColor(): ColorInfo {
  const MAX_HEX_COLOR_VALUE: number = 16777215;

  function generateRandomColor(): string {
    return "#" + Math.floor(Math.random() * MAX_HEX_COLOR_VALUE).toString(16);
  }

  function generateColorWithOpacity(hex: string): string {
    let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, 0.3)`;
  }

  const color: string = generateRandomColor();
  const backgroundColor: string | ColorInfo = generateColorWithOpacity(color);

  return {
    backgroundColor,
    color,
  };
}

export default getRandomColor;
