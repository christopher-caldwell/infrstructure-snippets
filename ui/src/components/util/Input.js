import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';

export default function CustomizedInputBase({ bindTerm }) {
  return (
		<form>
			<TextField
				fullWidth
				label="Search Term"
				{...bindTerm}
				InputProps={{
					endAdornment: (
						< InputAdornment position="end" >
							<IconButton
								aria-label="toggle password visibility"
							>
							<SearchIcon/>
							</IconButton>
						</InputAdornment>
					)
				}}
			/>
		</form>
  );
}