/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useEmployees } from "@/features/employees";
import { useShifts } from "@/features/shifts";
import { useAssignments } from "@/features/assignments";
import { useWeekNav } from "@/hooks";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // custom Hooks
  // employees
  const { employees, addEmployee, updateEmployee, deleteEmployee } =
    useEmployees();
  // shifts
  const { shifts, updateShift, addShift, deleteShift } = useShifts();
  // weekNav
  const { currentWeek, goNext, goPrev, goToday } = useWeekNav();
  // Assignments (reçoit shifts pour la résolution des conflits par type)
  const {
    assignments,
    addAssignment,
    updateAssignment,
    deleteAssignment,
    deleteAssignmentsByEmployee,
    deleteAssignmentsByShift,
  } = useAssignments(shifts, currentWeek);

  return (
    <AppContext.Provider
      value={{
        // Employees
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        // shifts
        shifts,
        updateShift,
        addShift,
        deleteShift,
        // semaine
        currentWeek,
        goNext,
        goPrev,
        goToday,
        // assignments
        assignments,
        addAssignment,
        updateAssignment,
        deleteAssignment,
        deleteAssignmentsByEmployee,
        deleteAssignmentsByShift,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext doit être utilisé dans AppProvider");
  return context;
}
