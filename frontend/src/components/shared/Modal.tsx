import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const roleSchema = z.object({
    role: z.enum(["Student", "Alumni"], {
        errorMap: () => ({ message: "Please select a role" }),
    }),
});

type RoleFormData = z.infer<typeof roleSchema>;

interface RoleSelectionModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoleSelectionModal:React.FC<RoleSelectionModalProps> = ({ showModal, setShowModal }) => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }, } = useForm<RoleFormData>({resolver: zodResolver(roleSchema),});

    const onSubmit = (data: RoleFormData) => {
        if (data.role === "Alumni") {
            navigate("/alumni/register");
            setShowModal(false);
        }
        console.log("Selected Role:", data.role);
        setShowModal(false);
    };

    return (
        <AnimatePresence>
            {showModal && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-10 bg-secondary-700/50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-8 sm:p-0"
                    >
                        <div className="mx-auto w-full overflow-hidden rounded-lg bg-blue-50 shadow-xl sm:max-w-sm">
                            <div className="relative p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="text-center">
                                        <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500">
                                            <CheckCircle className="h-6 w-6" />
                                        </div>
                                        <select
                                            {...register("role")}
                                            className="mt-3 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm text-gray-700 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                                        >
                                            <option value="">Join Via Role</option>
                                            <option value="Student">Student</option>
                                            <option value="Alumni">Alumni</option>
                                        </select>
                                        {errors.role && (
                                            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                                        )}
                                    </div>
                                    <div className="mt-5 flex justify-end gap-3">
                                        <button
                                            type="submit"
                                            className="flex-1 rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-bold text-gray-800 shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default RoleSelectionModal;
