import {useState} from "react";

function PostForm() {
    const [textAreaValue, setValue] = useState("");

    let comment;

    function handleChange(event) {
        setValue(event.target.value);
    }

    function doAddTags(tag1, tag2, obj) {
        let len = obj.value.length;
        let start = obj.selectionStart;
        let end = obj.selectionEnd;
        let scrollTop = obj.scrollTop;
        let scrollLeft = obj.scrollLeft;
        let sel = obj.value.substring(start, end);
        let rep = tag1 + sel + tag2;

        obj.value = comment.value.substring(0, start) + rep + obj.value.substring(end, len);
        obj.scrollTop = scrollTop;
        obj.scrollLeft = scrollLeft;
        obj.focus();
        obj.setSelectionRange(start + tag1.length, end + tag1.length);
    }


    return (
        <div className="form" style={{marginBottom: "17px"}}>

            <input type="text" name="email" placeholder="Email" autoComplete="off" className="field email"
                   maxLength="50"/>
            <input type="text" name="anonname" placeholder="Имя" autoComplete="off" className="field email"
                   maxLength="30"/>

            <input type="submit" value="Пост" className="field submit" id="submit"/>
            <input type="hidden" value="@ViewBag.Board.BoardId"/>
            <input type="hidden" value="@ViewBag.Thread.ThreadId"/>
            <input type="hidden" value="@ViewBag.UserIp"/>

            <input type="text" name="subject" placeholder="Тема" autoComplete="off" className="field" maxLength="50"/>

            <textarea className="field comment" id="comment" placeholder="( . .)φ__" ref={comm => (comment = comm)}
                      onChange={handleChange}/>

            <div className="formatting-btn">
                <button type="button"
                        className="frm-btn bold"
                        onClick={() => doAddTags('[b]', '[/b]', comment)}/>

                <button type="button"
                        className="frm-btn italic"
                        onClick={() => doAddTags('[i]', '[/i]', comment)}/>

                <button type="button"
                        className="frm-btn quote"
                        onClick={() => doAddTags('>', '', comment)}/>

                <button type="button"
                        className="frm-btn underline"
                        onClick={() => doAddTags('[u]', '[/u]', comment)}/>

                <button type="button"
                        className="frm-btn spoiler"
                        onClick={() => doAddTags('[spoiler]', '[/spoiler]', comment)}/>

                <button type="button"
                        className="frm-btn strikethrough"
                        onClick={() => doAddTags('[s]', '[/s]', comment)}/>
            </div>

            <input type="file" name="files" id="files" multiple className="field"/>

            <div className="form-checks">
                <div className="form-check">
                    <input className="checkbox-sage" type="checkbox" name="sage" value="true" id="sage"/>
                    <label htmlFor="sage"/>
                    <span>Мудрец</span>
                </div>

                <div className="form-check">
                    <input className="checkbox-op" type="checkbox" name="isWrittenByOp" value="true" id="op"/>
                    <label htmlFor="op"/>
                    <span>ОП</span>
                </div>

            </div>

        </div>
    );
}

export default PostForm;