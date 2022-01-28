const MailTo = (props) => {
    return (
        <a href={`mailto:${props.email}?subject=${props.subject || ""}&body=${props.body || ""}`} className={props.className}>
          {props.linkText}
        </a>
      );
}

export default MailTo;