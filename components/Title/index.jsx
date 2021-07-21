import styles from "./Title.module.scss"

export default function Title({children}) {
  return (
    <div className='text-center'>
      <h1 className={`relative text-2xl inline ${styles.title}`}>{children}</h1>
    </div>
  )
}
