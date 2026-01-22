import { Card, Badge } from "@/components/ui";

function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-text-primary">{employee.name}</h3>
        <div
          className="w-4 h-4 rounded-full border-2 border-border"
          style={{ backgroundColor: employee.color }}
        />
      </div>
      <p className="text-sm text-text-secondary mb-3">
        0 h / {employee.weeklyHours} h
      </p>
      <div className="flex flex-wrap gap-1">
        {employee.skills.map((skill) => (
          <Badge key={skill} label={skill} color="blue" />
        ))}
      </div>
    </Card>
  );
}

export default EmployeeCard;
