import {toast} from "react-toastify";

export const toastAnswerCreator = (response: Promise<string> , successMessage: string) => {

    toast.promise(
        response,
        {
            pending: 'Загрузка...',
            success: {
                render({data}) {
                    return `${successMessage}, ${data}!`
                },
            },
            error: {render: ({data}) => `${data}`}
        }
    )
}