// Crear HTML del modal
const modalHTML = `
<div class="modal fade" id="mediosPagoModal" tabindex="-1" aria-labelledby="mediosPagoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fw-bold text-purple" id="mediosPagoLabel">Medios de Pago Disponibles</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <i class="bi bi-credit-card-2-front fs-2 text-primary"></i>
            <h6 class="fw-bold mt-2">Tarjetas de crédito</h6>
            <p>Aceptamos Visa, MasterCard, American Express y más.</p>
          </div>
          <div class="col-md-4 mb-4">
            <i class="bi bi-cash-stack fs-2 text-success"></i>
            <h6 class="fw-bold mt-2">Efectivo</h6>
            <p>Pagá al recibir o en puntos habilitados.</p>
          </div>
          <div class="col-md-4 mb-4">
            <i class="bi bi-phone fs-2 text-info"></i>
            <h6 class="fw-bold mt-2">Transferencia o QR</h6>
            <p>Enviá tu comprobante luego del pago por transferencia o escaneando el QR.</p>
          </div>
        </div>
        <p class="text-muted text-center">Ante cualquier duda, no dudes en contactarnos por WhatsApp o redes.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
`;

// Inyectar modal al body si aún no existe
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const link = document.getElementById("mediosDePagoLink").closest('a.text-purple.fw-semibold');
  if (link) {
    link.setAttribute("data-bs-toggle", "modal");
    link.setAttribute("data-bs-target", "#mediosPagoModal");
  }
});
