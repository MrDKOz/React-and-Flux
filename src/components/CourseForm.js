import React from "react";
import TextInput from "./common/TextInput";
import DropDownInput from "./common/DropDownInput";
import PropTypes from "prop-types";

function CourseForm(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<TextInput
				id="title"
				name="title"
				label="Title"
				onChange={props.onChange}
				value={props.course.title}
				error={props.errors.title}
			/>

			<DropDownInput
				id="author"
				name="authorId"
				label="Author ID"
				onChange={props.onChange}
				value={props.course.authorId.toString()}
				error={props.errors.authorId}
			/>

			<TextInput
				id="category"
				name="category"
				label="Category"
				onChange={props.onChange}
				value={props.course.category}
				error={props.errors.category}
			/>

			<input type="submit" value="Save" className="btn btn-primary" />
		</form>
	);
}

CourseForm.propTypes = {
	course: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

export default CourseForm;
