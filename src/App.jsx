
function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}Ramakrishnan_Resume.pdf`;

  return (
    <div
      className="d-flex flex-column overflow-hidden bg-body-tertiary"
      style={{ height: "100dvh" }}
    >
      <header className="bg-primary text-white flex-shrink-0">
        <div className="container-fluid px-3 px-md-4 py-3">
          <div className="d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center gap-3">
              <div className="bg-white text-primary rounded-3 fw-bold d-flex align-items-center justify-content-center"
                style={{ width: "42px", height: "42px" }}>
                JR
              </div>

              <div>
                <h5 className="fw-bold mb-0">
                  J Ramakrishnan
                </h5>
              </div>
            </div>

            <a
              href={resumeUrl}
              download="J_Ramakrishnan_Resume.pdf"
              className="btn btn-light fw-semibold btn-sm px-3"
            >
              ↓ <span className="d-none d-sm-inline ms-1">Download Resume</span>
              <span className="d-sm-none ms-1">Download</span>
            </a>

          </div>
        </div>
      </header>

      <main
        className="flex-grow-1 d-flex flex-column overflow-hidden"
        style={{ minHeight: 0 }}
      >

        <div className="container-fluid px-3 px-md-4 py-3 flex-shrink-0">
          <div className="d-flex justify-content-between align-items-center gap-2">

            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <h6 className="fw-bold mb-0">
                  Resume Document
                </h6>
                <span className="badge bg-success-subtle text-success">
                  Latest
                </span>
              </div>

            </div>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              <span className="d-none d-sm-inline">View Full PDF</span>
              <span className="d-sm-none">View PDF</span> ↗
            </a>

          </div>
        </div>

        <div
          className="flex-grow-1 px-2 px-md-4 pb-3 overflow-hidden"
          style={{ minHeight: 0 }}
        >
          <div className="bg-secondary-subtle rounded-3 border h-100 p-1 p-md-2">

            <div className="bg-white rounded-2 shadow-sm overflow-hidden h-100">
              <iframe
                src={resumeUrl}
                title="J Ramakrishnan Resume"
                className="w-100 h-100 border-0 d-block"
              />
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}

export default App;
