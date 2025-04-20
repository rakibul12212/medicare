import Breadcrumb from '@/component/UI/Breadcrumb';
import Container from '@/component/UI/Container/Container';
import React from 'react';

const page = () => {
    return (
      <Container>
        <div className="bg-gray-50">
          <h1 className="text-4xl font-semibold text-left text-[#3B585E]  px-5 md:px-20 pt-10">
            Appointment
          </h1>

          <div className="px-5 md:px-20">
            <Breadcrumb />
          </div>
        </div>
      </Container>
    );
};

export default page;