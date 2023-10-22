export const INVOICES_STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  IN_PROCESS: "in_process",
  FAILED: "failed",
  REJECTED: "rejected",
  CANCELLED: "cancelled",
  INIT: "initial",
} as const;

export const URLS = {
  checkout: "/checkout",
};

export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
