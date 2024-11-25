import { useState } from "react";

const WizardForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };
    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log("Form submitted:", formData)
    };

    if (isSubmitted) {
        return (
          <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-blod mb-4">Submitted data</h2>
            <p><strong> Name: </strong> {formData.name}</p>
            <p><strong>Email: </strong> {formData.email}</p>
            <p><strong>Address: </strong> {formData.address}</p>
            <p><strong>Phone: </strong> {formData.phone}</p>

            <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 bg-blue-500 text-white px-4 py-2"
            >
                Fill Again
            </button>
          </div>
        );
    }
    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Wizard Form</h1>

            {currentStep === 1 && (
                <div>
                    <label className="block mb-2">
                        Name:
                        <input 
                            type="text"
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Email:
                        <input 
                            type="email"
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                </div>
            )}

            {currentStep === 2 && (
                <div>
                    <label className="block mb-2">
                        Address:
                        <input 
                            type="text"
                            name="address" 
                            value={formData.address} 
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Phone:
                        <input 
                            type="text"
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                </div>
            )}

            {currentStep === 3 && (
                <div>
                    <h2 className="text-xl font-semiblod">Confirm Details</h2>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Address: {formData.address}</p>
                    <p>Phone: {formData.phone}</p>
                </div>
            )}
            <div className="mt-4 flex justify-between">
                {currentStep > 1 && (
                    <button
                        onClick={prevStep}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Previous
                    </button>
                )}
                {currentStep < 3 ? (
                    <button
                        onClick={nextStep}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Next
                    </button>
                ): (
                    <button
                        onClick={handleSubmit}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    )
}

export default WizardForm;