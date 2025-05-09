import FormInput from "../../../components/form-components/FormInput";
import FormSelect from "../../../components/form-components/FormSelect";

const AuditSummary = () => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
      {/* Keep date input as is */}
      <div className="sm:flex sm:items-center gap-x-3">
        <label className="block text-sm font-semibold mb-1 min-w-[120px]">Audit Date:</label>
        <input type="date" className="flex-1 w-full border border-gray-300 rounded px-2 py-1" />
      </div>
      
      {/* Text display */}
      <div className="sm:flex sm:items-center gap-x-3">
        <label className="block text-sm font-semibold mb-1 min-w-[120px]">Audit By:</label>
        <span className='text-sm'>Rahul Deshmukh</span>
      </div>
      
      <FormSelect
        name="coAuditor1"
        label="Co-Auditor 1"
        labelWidth="min-w-[120px]"
        options={[
          { value: "user1", label: "John Doe" },
          { value: "user2", label: "Jane Smith" },
          { value: "user3", label: "Alex Johnson" }
        ]}
        placeholder="Select"
      />
      <FormSelect
        name="coAuditor2"
        label="Co-Auditor 2"
        labelWidth="min-w-[120px]"
        options={[
          { value: "user1", label: "John Doe" },
          { value: "user2", label: "Jane Smith" },
          { value: "user3", label: "Alex Johnson" }
        ]}
        placeholder="Select"
      />
      
      <FormInput
        name="notes"
        label="Notes" 
        labelWidth="min-w-[120px]" 
        fullWidth
        multiline
        rows={4}
        placeholder="Enter notes here..."
      />
      
      <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
        <FormInput
          name="workForce"
          label="Workforce" 
          labelWidth="min-w-[120px]" 
          className="flex-1"
        />
        <FormInput
          name="emf"
          label="EMF" 
          labelWidth="min-w-[60px]" 
          className="flex-1"
          disabled
        />
        
        <div className="sm:flex sm:items-center gap-x-3 flex-1">
          <label className="block text-sm font-semibold mb-1 min-w-[100px]">Safety Score:</label>
          <div className="flex items-center gap-2 w-full">
            <input 
              type="text" 
              value="150/150" 
              disabled 
              className="w-24 border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" 
            />
            <div className="h-3 rounded relative w-full bg-gray-200">
              <div 
                className="h-3 rounded absolute left-0 top-0 bg-green-600" 
                style={{ width: '100%' }} 
              />
              <span className="text-xs font-semibold text-white z-10 w-full text-center absolute left-0 top-0 flex items-center justify-center h-3">
                100%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditSummary;