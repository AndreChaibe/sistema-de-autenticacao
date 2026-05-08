interface FormFeedbackProps {
    error?: string | null;
    message?: string | null;
    hasValidationErrors?: boolean;
}

export const FormFeedback = ({ message, error, hasValidationErrors }: FormFeedbackProps) => {
    return (
        <>
            {error && !hasValidationErrors && (
                <p className="font-semibold text-center mt-8 text-[#d52525] text-[20px]">
                    {error}
                </p>
            )}

            {message && !hasValidationErrors && (
                <p className="font-semibold text-center mt-8 text-[#4a9224] text-[20px]">
                    {message}
                </p>
            )}
        </>
    );
};