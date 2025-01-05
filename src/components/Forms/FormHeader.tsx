import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

const FormHeader = ({ title, description }: Props) => {
  return (
    <>
      <Image src="/icons/logo.png" alt="logo" width={156} height={43} />
      <div className="w-full text-left">
        <h1 className="mb-2 font-interBold text-3xl font-semibold text-light sm:text-4xl dark:text-light">
          {title}
        </h1>
        <p className="font-interRegular text-xs text-gray sm:text-sm dark:text-gray">
          {description}
        </p>
      </div>
    </>
  );
};

export default FormHeader;
