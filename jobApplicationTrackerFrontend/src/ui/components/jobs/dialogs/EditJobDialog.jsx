import React, {useCallback, useEffect, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    CircularProgress
} from "@mui/material";
import {jobRepository} from "../../../../repository/jobRepository.js";


const EditJobDialog = ({open, onClose, jobToEdit, onEdit}) => {

    const [formData, setFormData] = useState({
            "title": jobToEdit.title,
            "company": jobToEdit.company,
            "location": jobToEdit.location,
            "description": jobToEdit.description,
            "fieldOfInterest": jobToEdit.fieldOfInterest,
            "position": jobToEdit.position,
            "workMode": jobToEdit.workMode,
            "workType": jobToEdit.workType,
            "companyWebsite": jobToEdit.companyWebsite,
            "openDate": jobToEdit.openDate,
            "closeDate": jobToEdit.closeDate,
            "status": jobToEdit.status
        }
    );

    const initialEnumState = {
        fieldsOfInterest: [],
        workTypes: [],
        workModes: [],
        positionLevels: [],
        status: [],
    }

    const [enumOptions, setEnumOptions] = useState(initialEnumState);
    const [loading, setLoading] = useState({
        fieldsOfInterest: false,
        workTypes: false,
        workModes: false,
        positionLevels: false,
        status: false,
    });


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        console.log('Updated form data being sent:', formData);
        onEdit(jobToEdit.id, formData);
        setFormData(formData);
        onClose();
    };

    // Fetch all enum options
    const fetchEnumOptions = useCallback(async () => {
        try {
            setLoading({
                fieldsOfInterest: true,
                workTypes: true,
                workModes: true,
                positionLevels: true,
            });

            // Fetch all enum options in parallel
            const [fieldsOfInterestRes,
                workTypesRes,
                workModesRes,
                positionLevelsRes,
                statusRes] = await Promise.all([
                jobRepository.getAllPossibleFieldsOfInterest(),
                jobRepository.getAllPossibleWorkTypes(),
                jobRepository.getAllPossibleWorkModes(),
                jobRepository.getAllPossibleJobPositionLevels(),
                jobRepository.getAllPossibleJobStatuses()
            ]);

            setEnumOptions({
                fieldsOfInterest: fieldsOfInterestRes.data || [],
                workTypes: workTypesRes.data || [],
                workModes: workModesRes.data || [],
                positionLevels: positionLevelsRes.data || [],
                status: statusRes.data || []
            });

        } catch (error) {
            console.error('Error fetching enum options:', error);
        } finally {
            setLoading({
                fieldsOfInterest: false,
                workTypes: false,
                workModes: false,
                positionLevels: false,
                status: false,
            });
        }
    }, []);

    useEffect(() => {
        if (open) {
            fetchEnumOptions()
                .then(() => {
                    console.log('Enum options loaded successfully');
                })
                .catch((error) => {
                    console.error('Failed to load enum options:', error);
                });
        }
    }, [open, fetchEnumOptions]);

    // Helper function to render select fields
    const renderSelectField = (name, label, options, isLoading) => (
        <FormControl fullWidth margin="dense" key={name}>
            <InputLabel>{label}</InputLabel>
            <Select
                name={name}
                value={formData[name] || ''}
                onChange={handleChange}
                label={label}
                variant="outlined"
                disabled={isLoading}>
                {isLoading ? (
                    <MenuItem disabled>
                        <CircularProgress size={20} style={{marginRight: 8}}/>
                        Loading...
                    </MenuItem>
                ) : (
                    options.map((option) => (
                        <MenuItem
                            key={option.value || option}
                            value={option.value || option}>
                            {option.label || option.name ||
                                (typeof option === 'string' ?
                                    option.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) :
                                    option)}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            aria-labelledby="edit-job-dialog-title"
            aria-describedby="edit-job-dialog-description">
            <DialogTitle id="edit-job-dialog-title">
                Edit Job
            </DialogTitle>
            <DialogContent id="edit-job-dialog-description">
                <TextField
                    margin="dense"
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                />

                {/* Field of Interest Select */}
                {renderSelectField(
                    'fieldOfInterest',
                    'Field of Interest',
                    enumOptions.fieldsOfInterest,
                    loading.fieldsOfInterest
                )}

                {/* Position Levels Select */}
                {renderSelectField(
                    'position',
                    'Position Level',
                    enumOptions.positionLevels,
                    loading.positionLevels
                )}

                {/* Work Type Select */}
                {renderSelectField(
                    'workType',
                    'Work Type',
                    enumOptions.workTypes,
                    loading.workTypes
                )}

                {/* Work Mode Select */}
                {renderSelectField(
                    'workMode',
                    'Work Mode',
                    enumOptions.workModes,
                    loading.workModes
                )}


                <TextField
                    margin="dense"
                    label="Open Date"
                    name="openDate"
                    type="datetime-local"
                    value={formData.openDate}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    margin="dense"
                    label="Close Date"
                    name="closeDate"
                    type="datetime-local"
                    value={formData.closeDate}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    margin="dense"
                    label="Company Website"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    fullWidth
                    type="url"
                />

                {/* ststus */}
                {renderSelectField(
                    'status',
                    'Status',
                    enumOptions.status,
                    loading.status
                )}


            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="warning"
                >
                    Update Job
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditJobDialog;