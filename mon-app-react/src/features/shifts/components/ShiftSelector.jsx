import { DEFAULT_SHIFTS } from "@/constants";

function ShiftSelector({ shifts, onChange, selectedShift }) {
  return (
    <select value={selectedShift} onChange={(e) => onChange(e.target.value)}>
      {shifts.map((shift) => (
        <option key={shift.id} value={shift.id}>
          {shift.name}
        </option>
      ))}
    </select>
  );
}

export default ShiftSelector;
