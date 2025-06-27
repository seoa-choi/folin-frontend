import Image from 'next/image';

export default function InputField({
  label,
  type,
  id,
  name,
  placeholder,
  required,
  className,
}: {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required: true;
  className: string;
}) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="mb-[8px]">
          {label}
          <span className="text-[#ff5c40] align-middle leading-[22.5px]">
            {' '}
            *
          </span>
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          className={`bg-[#f7f7f7] p-[12px_16px] rounded border border-[#f7f7f7] caret-[#00d48d] hover:border-[#00d48d] w-full min-h-[48px] ${className}`}
        />
        {type === 'password' && (
          <div className="absolute right-[16px] top-[50%] -translate-y-[calc(50%+4px)]">
            <button type="button" className="w-[24px] h-[24px] bg-transparent">
              <Image
                src="/images/blind.png"
                alt="비밀번호 숨김"
                width={24}
                height={24}
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
