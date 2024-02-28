interface ButtonProps  {
    text: string,
    question?: string | number
}

function Button({ text, question }: ButtonProps) {
    return (
        <>
            <p>
                {question}
            </p>
            <button>
                {text}
            </button>
        </>
    )
}

export default Button