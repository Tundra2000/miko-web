import React from "react";
import styles from "./kanban-board.module.css";
import { KanbanBoard } from "../../components/kanban-board/kanban-board";

export function KanbanBoardPage() {
  return (
    <div className={styles.content}>
      <KanbanBoard />
    </div>
  );
}
