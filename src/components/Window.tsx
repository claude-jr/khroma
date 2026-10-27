import { useRef, useState } from "react";

type WindowPosition = {
  top: number;
  left: number;
};

type DragStart = {
  pointerId: number;
  pointerX: number;
  pointerY: number;
  rectangleX: number;
  rectangleY: number;
};

const Window = () => {
  const [position, setPosition] = useState<WindowPosition>({
    top: 90,
    left: 110,
  });
  const dragStart = useRef<DragStart | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Do NOT start dragging if the mouse button isn't the left
    // or if you already started dragging with another pointer
    if (e.button !== 0 || dragStart.current) return;

    dragStart.current = {
      pointerId: e.pointerId,
      pointerX: e.clientX,
      pointerY: e.clientY,
      rectangleX: position.left,
      rectangleY: position.top,
    };

    // Locks the pointer to the specified element even if
    // it passes under another element
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const start = dragStart.current;
    // If we have not started dragging or
    // if we interrupt with another pointer
    if (!start || e.pointerId !== start.pointerId) return;

    // Here we compute the deltas from the initial
    // mouse click...
    const dX = e.clientX - start.pointerX;
    const dY = e.clientY - start.pointerY;
    // ...and add the to the position of the window
    setPosition({ top: start.rectangleY + dY, left: start.rectangleX + dX });
  };

  const handlePointerEnd = (e: React.PointerEvent) => {
    if (dragStart.current?.pointerId !== e.pointerId) return;

    // Empty data for next drag
    dragStart.current = null;

    // Release element from capture (aka releasing it)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      className="window"
      style={{
        top: 0,
        left: 0,
        transform: `translateX(${Math.max(Math.min(position.left, window.screen.width - (35 + 10)), -850 + 35 + 10)}px)
                    translateY(${Math.max(Math.min(position.top, window.screen.height - (35 + 10)), 24.895)}px)`,
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <div
        className="window-handle"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onLostPointerCapture={handlePointerEnd}
      ></div>
      <div className="window-content"></div>
    </div>
  );
};

export default Window;
