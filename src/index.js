import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //pタグ生成
  const p = document.createElement("p");
  p.className = "todo";
  p.innerText = text;

  //buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //完了リストに追加
  completeButton.addEventListener("click", () => {
    //未完了リストから削除
    deleteFromIncompleteList(div.parentNode);
    //TODOの内容（テキスト）を取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    //TODOの内容を初期化
    addTarget.textContent = null;
    console.log(addTarget);
    //内容を生成
    const p = document.createElement("p");
    p.className = "todo";
    p.innerText = text;

    //戻すボタンの生成
    const removeButton = document.createElement("button");
    removeButton.innerText = "戻す";
    //内容を生成
    addTarget.appendChild(p);
    addTarget.appendChild(removeButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
    //未完了リストに戻す
    removeButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = removeButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキストを取得
      const text = removeButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ<li>を未完了リストから削除
    deleteFromIncompleteList(div.parentNode);
  });

  //div生成
  const div = document.createElement("div");
  //クラス付与
  div.className = "listRow";
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //liタグ生成
  const li = document.createElement("li");
  li.appendChild(div);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
