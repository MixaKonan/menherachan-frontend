function PostForm() {
    return (
        <div className="form" style="margin-bottom: 17px">

            <input type="text" name="email" placeholder="Email" autoComplete="off" className="field email" maxLength="50" />
            <input type="text" name="anonname" placeholder="Имя" autoComplete="off" className="field email" maxLength="30" />

            <input type="submit" value="Пост" class="field submit" id="submit" />
            <input type="hidden" value="@ViewBag.Board.BoardId" />
            <input type="hidden" value="@ViewBag.Thread.ThreadId" />
            <input type="hidden" value="@ViewBag.UserIp" />

            <input type="text" name="subject" placeholder="Тема" autoComplete="off" className="field" maxLength="50" />

            <textarea className="field comment" id="comment" placeholder="( . .)φ__"/>

            <div class="formatting-btn">
                <button type="button" className="frm-btn bold" onClick="doAddTags('[b]', '[/b]', formTextArea)"/>
                <button type="button" className="frm-btn italic" onClick="doAddTags('[i]', '[/i]', formTextArea)"/>
                <button type="button" className="frm-btn quote" onClick="doAddTags('>', '', formTextArea)"/>
                <button type="button" className="frm-btn underline" onClick="doAddTags('[u]', '[/u]', formTextArea)"/>
                <button type="button" className="frm-btn spoiler" onClick="doAddTags('[spoiler]', '[/spoiler]', formTextArea)"/>
                <button type="button" className="frm-btn strikethrough" onClick="doAddTags('[s]', '[/s]', formTextArea)"> </button>
            </div>

            <input type="file" name="files" id="files" multiple class="field" />

            <div class="form-checks">
                <div className="form-check">
                    <input className="checkbox-sage" type="checkbox" name="sage" value="true" id="sage" />
                    <label htmlFor="sage" />
                    <span>Мудрец</span>
                </div>

                <div className="form-check">
                    <input className="checkbox-op" type="checkbox" name="isWrittenByOp" value="true" id="op" />
                    <label htmlFor="op" />
                    <span>ОП</span>
                </div>

            </div>

        </div>
    );
}

export default PostForm;