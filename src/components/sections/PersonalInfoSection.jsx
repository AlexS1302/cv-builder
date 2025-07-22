import { useState } from "react"

export default function PersonalInfoSection() {
  const [isOpen, setIsOpen] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <section>
      <h2 onClick={toggleOpen}>
        Personal Information {isOpen ? '▲' : '▼'}
      </h2>

      {isOpen && (
        <form onSubmit={handleSubmit}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            autoComplete="given-name"
          />
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            autoComplete="family-name"
          />
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            autoComplete="email"
          />
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            autoComplete="tel"
          />
          <input
            id="location"
            name="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            autoComplete="address-level2"
          />
          <button type="submit">Save Section</button>
        </form>
      )}
    </section>
  )
}
