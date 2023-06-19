const TodoForm = () => {
  return (
    <div>
      <form>
        <label>제목</label>
        <input type="text" />
        <label>내용</label>
        <input type="textarea" />
        <button>제출</button>
      </form>
    </div>
  );
};

export default TodoForm;
