const fillPaintBuilder = () => {
  let colorSelected;

  const colorBoxConstructor = ({ parentDivId, colorCodes = [] }) => {
    if (!parentDivId) {
      return console.error(
        "You don`t send parentDiv of Color Box for fillPaintBuilder"
      );
    }
    const parentDiv = document.getElementById(parentDivId);
    if (!parentDiv) {
      return console.error(
        `Cant find div with id ${parentDivId}. Cant initiate fillPaintBuilder`
      );
    }

    const colorBox = colorCodes.reduce((prev, colorCode) => {
      const newColor = document.createElement("div");
      newColor.className = "color-box";
      newColor.addEventListener("click", () => {
        this.colorSelected = colorCode;
      });
      newColor.style = `background-color:${colorCode}`;
      prev.appendChild(newColor);
      return prev;
    }, document.createElement("div"));

    colorBox.className = "flex-parent item-grid";
    parentDiv.appendChild(colorBox);
  };

  clickOnTargetItemSvg = (element, colorSelected) => {
    if (fillPaintBuilder && colorSelected) {
      element.style = `fill:${colorSelected}`;
    }
  };

  const applySvgPaintBehavior = (containerDiv) => {
    if (!containerDiv) {
      return console.error(
        "You don`t send containerDiv of Image Box for fillPaintBuilder"
      );
    }
    document.querySelectorAll(containerDiv).forEach((path) => {
      path.addEventListener("click", () => {
        this.clickOnTargetItemSvg(path, this.colorSelected);
      });
    });
  };

  return {
    colorBoxConstructor,
    applySvgPaintBehavior,
    clickOnTargetItemSvg,
    colorSelected,
  };
};
