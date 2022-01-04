import { useState, useEffect } from 'react';
import { Flex, Box, Text, Icon, Select, Input, Spinner, Buuton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { mdCancel } from 'react-icons/md';
import Image from 'next/image'

const SearchFilters = () => {
  const [filters, setFilters] = useState({});
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      
    </Flex>
  )
}

export default SearchFilters