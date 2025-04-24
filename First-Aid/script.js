const serviceInfo = {
    CPR: `CPR (Cardiopulmonary Resuscitation) is a lifesaving technique useful in emergencies such as heart attacks.
    💡 Steps:
    1) Call emergency services.
    2) Push hard and fast in the center of the chest.
    3) Provide rescue breaths if trained.`,

    Burns: `For minor burns:
    🔥 1) Cool the burn with running water.
    🚿 2) Cover with a sterile, non-stick dressing.
    ⚠️ For severe burns:
    1) Call emergency services.
    2) Do not remove burnt clothing.
    3) Cover loosely with a clean cloth.`,

    Fractures: `For fractures:
    🩹 1) Immobilize the injured area.
    🛑 2) Apply a splint if possible.
    🚑 3) Seek medical assistance immediately.`,

    Choking: `For choking:
    🤧 1) Encourage the person to cough.
    👏 2) Perform back blows and abdominal thrusts if necessary.
    🚨 3) Call emergency services if the airway is blocked.`
};

function showInfo(service) {
    alert(`First Aid for ${service}:\n\n${serviceInfo[service]}`);
}
