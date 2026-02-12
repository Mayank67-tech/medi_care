import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PaymentModal = ({ isOpen, onClose, onPaymentSuccess, amount }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardName, setCardName] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'stripe'

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            toast.success('Payment Successful!');
            onPaymentSuccess();
            onClose();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">Secure Payment</h2>

                <div className="mb-6 flex gap-4 border-b pb-4">
                    <button
                        onClick={() => setPaymentMethod('card')}
                        className={`flex-1 py-2 text-center rounded-md transition-colors ${paymentMethod === 'card' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        Credit Card
                    </button>
                    <button
                        onClick={() => setPaymentMethod('stripe')}
                        className={`flex-1 py-2 text-center rounded-md transition-colors ${paymentMethod === 'stripe' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        Stripe
                    </button>
                </div>

                {paymentMethod === 'card' ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="0000 0000 0000 0000"
                                className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                <input
                                    type="text"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    placeholder="MM/YY"
                                    className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                                <input
                                    type="text"
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                    placeholder="123"
                                    className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                            <input
                                type="text"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Processing...' : `Pay $${amount}`}
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">You will be redirected to Stripe to complete your payment.</p>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
                        >
                            {loading ? 'Redirecting...' : 'Pay with Stripe'}
                        </button>
                    </div>
                )}

                <div className="mt-4 flex justify-center gap-2 text-gray-400">
                    <i className="fab fa-cc-visa text-2xl"></i>
                    <i className="fab fa-cc-mastercard text-2xl"></i>
                    <i className="fab fa-cc-amex text-2xl"></i>
                </div>

            </div>
        </div>
    );
};

export default PaymentModal;
