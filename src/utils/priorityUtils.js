import {
  faAngleDoubleUp,
  faAngleDown,
  faAngleUp,
  faEllipsis,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "3": {
      return faAngleUp;
    }
    case "1": {
      return faAngleDown;
    }
    case "2": {
      return faMinus;
    }
    case "4": {
      return faAngleDoubleUp;
    }
    default: {
      return faEllipsis;
    }
  }
};

export const getPriorityText = () => ({
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
});
