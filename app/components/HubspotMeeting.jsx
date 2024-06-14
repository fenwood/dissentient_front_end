import React from "react"
import { IoMdClose } from "react-icons/io"

const HubspotMeeting = ({ isModalOpen, onClose }) => {
  if (isModalOpen !== true) {
    return null
  }

  return (
    <div className="container w-100">
      <section className="modal">
        <article className="modal-content p-lg-4">
          <div className="exit-icon text-end">
            <IoMdClose onClick={onClose} />
          </div>
          <main className="modal-mainContents">
            <div className="container w-100">
              <iframe
                title={"hubspot"}
                src={
                  "https://meetings.hubspot.com/fenwood?uuid=5b6d2283-cf7b-4f21-8a33-86e94895a74e"
                }
              />
            </div>
          </main>
        </article>
      </section>
    </div>
  )
}

export default HubspotMeeting
