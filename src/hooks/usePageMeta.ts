import { useEffect } from "react"

const HOME_TITLE = "TERAFAB | The Factory of Super Intelligence"
const HOME_DESCRIPTION =
  "TERAFAB is an Ethereum community token inspired by the infrastructure, compute and silicon race powering the next generation of intelligence."

export function usePageMeta(title: string, description = HOME_DESCRIPTION) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", description)
  }, [title, description])
}

export { HOME_DESCRIPTION, HOME_TITLE }
