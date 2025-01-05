const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative scale-90 md:scale-100 flex h-full w-[480px] flex-col items-center space-y-4 rounded-[20px] bg-primary/90 px-8 py-6 shadow-shade-1 sm:max-w-[500px] md:max-w-[532px]">
      {children}
    </div>
  );
};

export default FormContainer;
