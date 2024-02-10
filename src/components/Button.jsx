/* eslint-disable react/prop-types */
export default function Button({text, type}) {
    return(
        <button
            type={type}
            className="px-4 py-2 rounded w-full font-bold text-white text-2xl bg-gradient-to-r from-[#34A6DD] to-[#55529F]"
        >
            {text}
        </button>
    )
}
